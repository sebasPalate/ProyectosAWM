package com.example.appclase1

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_registrar.*


class RegistrarActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_registrar)
        enviarDatos()
    }

    fun enviarDatos() {
        // Capturar el evento del botónn
        btnEnviarRegistro.setOnClickListener {
            val nombres = editNombreRegistro.text.toString();
            val edad = editEdadRegistro.text.toString()
            val genero = if (rbFemenino.isChecked) rbFemenino.text.toString()
            else rbMasculino.text.toString()

            if (nombres.isEmpty()) {
                Toast.makeText(this, "Ingrese los nombres", Toast.LENGTH_LONG).show();
            }

            if (edad.isEmpty()) {
                Toast.makeText(this, "Ingrese la Edad", Toast.LENGTH_LONG).show();
            }

            if (!cvTerminos.isChecked) {
                Toast.makeText(this, "Acepte los Términos", Toast.LENGTH_SHORT).show();
            }

            val bundle = Bundle().apply {
                // Majerarse como un solo objeto
                // Ganamos espacio y procesamiento
                putString("KEY_NOMBRES", nombres)
                putString("KEY_EDAD", edad)
                putString("KEY_GENERO", genero)
            }

            val intent = Intent(this, DetalleActivity::class.java).putExtras(bundle);
            startActivity(intent);
        }
    }
}