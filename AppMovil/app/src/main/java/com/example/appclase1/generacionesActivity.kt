package com.example.appclase1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_generaciones.*

class generacionesActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_generaciones)
        verificar()
    }

    fun verificar() {
        btnVerificar.setOnClickListener {
            val anio = editAnio.text.toString().toInt()
            when (anio) {
                in 1930..1948 -> {
                    txtRespuestaGeneracion.setText("Perteneces a la Generación Silent Generation. \r\nPoblacion: 6.300.000. \r\nCaracteristica: Austeridad")
                }
                in 1949..1968 -> {
                    txtRespuestaGeneracion.setText("Perteneces a la Generación Baby Boom. \r\nPoblacion: 12.200.000. \r\nnCaracteristica: Ambición")
                }
                in 1969..1980 -> {
                    txtRespuestaGeneracion.setText("Perteneces a la Generación X. \r\nPoblacion: 9.300.000. \r\nCaracteristica: Obsesión por el éxito")
                }
                in 1981..1993 -> {
                    txtRespuestaGeneracion.setText("Perteneces a la Generación Y. \r\nPoblacion: 7.200.000. \r\nCaracteristica: Frustración")
                }
                in 1994..2010 -> {
                    txtRespuestaGeneracion.setText("Perteneces a la Generación Z. \r\nPoblacion: 7.800.000. \r\nCaracteristica: Irreverencia")
                }
                else -> {
                    txtRespuestaGeneracion.setText("No Perteneces a la Ninnguna Generación")
                }
            }
        }
    }
}