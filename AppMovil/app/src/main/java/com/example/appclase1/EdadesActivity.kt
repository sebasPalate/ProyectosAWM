package com.example.appclase1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_edades.*
import kotlinx.android.synthetic.main.activity_generaciones.*

class EdadesActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_edades)
        verificar();
    }

    fun verificar(){
        btnVerificarEdad.setOnClickListener {
            val edad = editEdad.text.toString().toInt();

            when (edad) {
                in 0..17 -> {
                    txtRespuestaEdad.setText("Eres Menor de Edad");
                }
                in 18..65 -> {
                    txtRespuestaEdad.setText("Eres Mayor de Edad");
                }
                in 66..90 -> {
                    txtRespuestaEdad.setText("Eres Adulto Mayor");
                }
                else -> {
                    txtRespuestaEdad.setText("Deberias Estar Muerto");
                }
            }
        }
    }
}