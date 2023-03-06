package com.example.appclasebasedatos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.appclasebasedatos.database.AppDataBase
import com.example.appclasebasedatos.databinding.AgregarPetBinding
import com.example.appclasebasedatos.model.Pet
import com.example.appclasebasedatos.utils.Constants
import java.util.concurrent.Executors


class AgregarPet : AppCompatActivity() {
    private lateinit var binding: AgregarPetBinding
    private var id = 0
    private val appDataBase: AppDataBase by lazy {
        AppDataBase.getInstance(this)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        binding = AgregarPetBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        inicizalizar()
        evento()
    }

    private fun inicizalizar() {
        val bundle = intent.extras
        bundle?.let {
            val pet = bundle.getSerializable(Constants.KEY_PET) as Pet
            binding.btnAgregar.text = "Actualizar"
            id = pet.id
            binding.editNombre.setText(pet.nombre)
            binding.editRza.setText(pet.raza)
            binding.editPreferenicas.setText(pet.preferencias)
        } ?: kotlin.run {
            binding.btnAgregar.text = "Registar"
            binding.editNombre.setText("")
            binding.editRza.setText("")
            binding.editPreferenicas.setText("")
        }
        binding.editNombre.requestFocus()
    }

    private fun evento() {
        binding.btnAgregar.setOnClickListener {
            val nombre = binding.editNombre.text.toString()
            val raza = binding.editRza.text.toString()
            val preferencias = binding.editPreferenicas.text.toString()
            if (id == 0) {
                agregar(Pet(0, nombre, raza, preferencias))
            } else {
                editar(Pet(id, nombre, raza, preferencias))
            }
        }
    }

    fun agregar(pet: Pet) {
        Executors.newSingleThreadExecutor().execute() {
            appDataBase.petDao().insert(pet)
            runOnUiThread {
                Toast.makeText(this, "Mascota registrada", Toast.LENGTH_LONG).show()
                onBackPressed()
            }
        }

    }

    fun editar(pet: Pet) {
        Executors.newSingleThreadExecutor().execute() {
            appDataBase.petDao().update(pet)
            runOnUiThread {
                Toast.makeText(this, "Mascota actualizada", Toast.LENGTH_LONG).show()
                onBackPressed()
            }
        }
    }
}