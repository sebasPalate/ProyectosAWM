package com.example.apppalate

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.example.apppalate.api.ApiService
import com.example.apppalate.databinding.ActivityAgregarVehiculoBinding
import com.example.apppalate.model.Vehiculo
import com.example.apppalate.utils.Constants
import com.google.firebase.database.FirebaseDatabase
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class AgregarVehiculo : AppCompatActivity() {
    private lateinit var binding: ActivityAgregarVehiculoBinding
    private val adapter: VehiculoAdapter by lazy {
        VehiculoAdapter()
    }
    private var id = "0"
    override fun onCreate(savedInstanceState: Bundle?) {
        binding = ActivityAgregarVehiculoBinding.inflate(layoutInflater)
        super.onCreate(savedInstanceState)
        setContentView(binding.root)
        getSupportActionBar()?.hide()
        inicizalizar()
        evento()
    }

    private fun inicizalizar() {
        val bundle = intent.extras
        bundle?.let {
            val vehiculo = bundle.getSerializable(Constants.KEY_MATRICULA) as Vehiculo
            id = vehiculo.id
            binding.btnAgregar.text = "Actualizar"
            binding.editMarca.setText(vehiculo.marca)
            binding.editModelo.setText(vehiculo.modelo)
            binding.editMatricula.setText(vehiculo.matricula)
            binding.editColor.setText(vehiculo.color)
        } ?: kotlin.run {
            binding.btnAgregar.text = "Registar"
            binding.editMarca.setText("")
            binding.editModelo.setText("")
            binding.editMatricula.setText("")
            binding.editColor.setText("")
        }
        binding.editMarca.requestFocus()
    }

    private fun evento() {
        binding.btnAgregar.setOnClickListener {
            val marca = binding.editMarca.text.toString()
            val modelo = binding.editModelo.text.toString()
            val matricula = binding.editMatricula.text.toString()
            val color = binding.editColor.text.toString()
            if (id == "0") {
                agregar(Vehiculo("", marca, modelo, matricula, color))
            } else {
                editar(id.toString(), Vehiculo("", marca, modelo, matricula, color))
            }
        }
    }

    fun agregar(vehiculo: Vehiculo) {

        runOnUiThread {
            val retrofit = Retrofit.Builder()
                .baseUrl("https://us-central1-vehicles-api-eb017.cloudfunctions.net/app/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build()

            val api = retrofit.create(ApiService::class.java)
            api.agregarVehiculo(vehiculo).enqueue(object : Callback<Void> {

                override fun onFailure(call: Call<Void>, t: Throwable) {
                    Log.d("falla", "onFailures")
                    Toast.makeText(baseContext, t.message, Toast.LENGTH_LONG).show()
                }

                override fun onResponse(call: Call<Void>, response: Response<Void>) {
                    Log.d("exitoso", "onResponse:")
                    Toast.makeText(baseContext, "¡Matriculación con Exitosa!", Toast.LENGTH_LONG).show()
                    onBackPressed()
                }

            })

            startActivity(Intent(this, MainActivity::class.java));
        }

    }

    fun editar(id: String, vehiculo: Vehiculo) {
        runOnUiThread {
            val retrofit = Retrofit.Builder()
                .baseUrl("https://us-central1-vehicles-api-eb017.cloudfunctions.net/app/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build()
            val api = retrofit.create(ApiService::class.java)
            api.editarVehiculo(id, vehiculo).enqueue(object : Callback<Void> {

                override fun onFailure(call: Call<Void>, t: Throwable) {
                    Log.d("falla", "onFailures")
                    Toast.makeText(baseContext, t.message, Toast.LENGTH_LONG).show()
                }

                override fun onResponse(call: Call<Void>, response: Response<Void>) {
                    Log.d("exitoso", "onResponse:")
                    Toast.makeText(baseContext, "¡Actualización con Exitosa!", Toast.LENGTH_LONG).show()
                    onBackPressed()
                }
            })
            startActivity(Intent(this, MainActivity::class.java));
        }

    }
}