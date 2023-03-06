package com.example.appclase1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    /**
     * Funcion que se lanza cuando se ejecuta la actividad
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        confirmarDatos();
    }


    /*
    Tres opcoines para acceder a los elementos de la ventana
        1. Buscando el componente por el ID (Obsoleta)
        2. Uso de Plugins, se accede directamente a todos los componentes de la aplicacion, pero el problema esta en lo componentes.
        3. Uso de la propiedad viewBinding que permite a acceder a los componentes de la ventana en la que esta actualmente, evitando la busqueta
            de todos los archivos de la acrividad. Mejora el rendimiendo de la aplicacion
      */

    // Uso de FindViewID concetarse hacia los elementos de las ventanas (Obsoleta)
    /* Uso de los Plugins Extextencions */
    fun confirmarDatos() {
        btnConfirmar.setOnClickListener {
            // Capturar los valores en la caja de texto
            val nombre = editNombres.text.toString();
            val apellido = editApellidos.text.toString();

            val resultado = "Bienvenido: ${nombre} ${apellido}";
            txtResultado.setText(resultado);
        }
    }
    /* Uso de las caracteristicas de lo ViewBulding*/
}