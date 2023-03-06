package com.example.appclase1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_detalle.*

class DetalleActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detalle)

        val bundle = intent.extras
        bundle?.let {
            val nombres = bundle.getString("KEY_NOMBRES") ?: "Desconocido"
            val edad = bundle.getString("KEY_EDAD") ?: "Desconocido"
            val genero = bundle.getString("KEY_GENERO") ?: "Desconocido"

            txtNombresDetalle.text = nombres
            txtEdadDetalle.text = edad
            txtGeneroDetalle.text = genero
        }
    }


}
