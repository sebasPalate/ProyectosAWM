package com.example.apppalate

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import com.example.apppalate.api.ApiService
import com.example.apppalate.databinding.ActivityMainBinding
import com.example.apppalate.model.Vehiculo
import com.example.apppalate.utils.Constants
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private val adapter: VehiculoAdapter by lazy {
        VehiculoAdapter()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        getSupportActionBar()?.hide()
        cargarDatos()
        setContentView(binding.root)
        eventos()
        cargarAdaptador()
    }

    private fun cargarDatos() {
        val retrofit =
            Retrofit.Builder().baseUrl("https://us-central1-vehicles-api-eb017.cloudfunctions.net/app/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .build()

        val api = retrofit.create(ApiService::class.java)
        api.fetchAllUsers().enqueue(object : Callback<List<Vehiculo>> {
            override fun onFailure(call: Call<List<Vehiculo>>, t: Throwable) {

                Log.d("falla", "onFailures")
                Toast.makeText(baseContext, t.message, Toast.LENGTH_LONG).show()
            }

            override fun onResponse(call: Call<List<Vehiculo>>, response: Response<List<Vehiculo>>) {
                Log.d("exitoso", "onResponse: {${response.body()!![0]}}")
                showData(response.body()!!)
            }

        })
    }

    fun cargarAdaptador() {
        binding.rvPet.adapter = adapter
    }

    private fun showData(users: List<Vehiculo>) {
        adapter.updateListPets(users)
        binding.rvPet.adapter = adapter
    }

    fun eventos() {
        binding.flbRegistar.setOnClickListener {
            startActivity(Intent(this, AgregarVehiculo::class.java))
            finish()
        }
        adapter.setOnClickListenerPetEdit = {
            val bundle = Bundle().apply {
                putSerializable(Constants.KEY_MATRICULA, it)
            }
            startActivity(Intent(this, AgregarVehiculo::class.java).apply {
                putExtras(bundle)
            })
            finish()
        }
        adapter.setOnClickListenerPetDelete = {
            runOnUiThread {
                val retrofit = Retrofit.Builder()
                    .baseUrl("https://us-central1-vehicles-api-eb017.cloudfunctions.net/app/api/")
                    .addConverterFactory(GsonConverterFactory.create())
                    .build()

                val api = retrofit.create(ApiService::class.java)
                api.eliminarVehiculo(it.id).enqueue(object : Callback<Void> {


                    override fun onFailure(call: Call<Void>, t: Throwable) {
                        Log.d("falla", "onFailures")
                        Toast.makeText(baseContext, t.message, Toast.LENGTH_LONG).show()
                    }

                    override fun onResponse(call: Call<Void>, response: Response<Void>) {
                        Toast.makeText(baseContext, "¡Eliminación Exitosa!", Toast.LENGTH_LONG)
                            .show()
                    }
                })
                finish()
                startActivity(Intent(this, MainActivity::class.java))
            }
        }
    }

}