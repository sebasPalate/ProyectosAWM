package com.example.fragmentos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.Fragment
import com.example.fragmentos.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)


        binding.primerBoton.setOnClickListener {
            remplazarFragmento(PrimerFragment())
        }

        binding.segundoBoton.setOnClickListener {
            remplazarFragmento(ItemFragment())
        }

    }

    private fun remplazarFragmento(fragment: Fragment) {
        val administradorFragmentos = supportFragmentManager
        val transaccionFragmento = administradorFragmentos.beginTransaction()
        transaccionFragmento.replace(R.id.contenedorFragmento, fragment)
        transaccionFragmento.commit()
    }

}