package com.example.appclasebasedatos

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.appclasebasedatos.database.AppDataBase
import com.example.appclasebasedatos.databinding.ActivityMainBinding
import com.example.appclasebasedatos.utils.Constants
import java.util.concurrent.Executors


class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding


    //Acceder al adaptador
    //Lazy ayuda que solo se inicialize cuando sea necesario
    private val adapter: PetAdapter by lazy {
        PetAdapter()
    }

    //Acceder a la instancia de la base de datos

    private val appDataBase: AppDataBase by lazy {
        AppDataBase.getInstance(this)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        cargarAdaptador()
        cargarDatos()
        eventos()
    }

    fun cargarAdaptador() {
        binding.rvPet.adapter = adapter
    }

    fun cargarDatos() {
        appDataBase.petDao().getPets().observe(this, { pets ->
            adapter.updateListPets(pets)
        })
    }

    fun eventos() {
        binding.flbRegistar.setOnClickListener {
            startActivity(Intent(this, AgregarPet::class.java))
        }
        adapter.setOnClickListenerPetEdit = {
            val bundle = Bundle().apply {
                putSerializable(Constants.KEY_PET, it)
            }
            startActivity(Intent(this, AgregarPet::class.java).apply {
                putExtras(bundle)
            })
        }
        adapter.setOnClickListenerPetDelete = {
            Executors.newSingleThreadExecutor().execute() {
                appDataBase.petDao().delete(it)
                runOnUiThread {
                    Toast.makeText(this, "Mascota eliminada", Toast.LENGTH_LONG).show()
                }
            }
        }
    }

}