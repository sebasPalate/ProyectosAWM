package com.example.appclase2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.appclase2.databinding.ActivityDetallePokemonBinding
import com.squareup.picasso.Picasso

class DetalleActivityPokemon : AppCompatActivity() {
    private  lateinit var binding: ActivityDetallePokemonBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detalle_pokemon)
        binding = ActivityDetallePokemonBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val bundle = intent.extras
        bundle?.let {
            val pokemon = it.getSerializable("key_pokemon") as Pokemon
            Picasso.get().load(pokemon.url).error(R.drawable.ic_launcher_background).into(binding.imgDetallePokemon)
            binding.txtDetallePokemon.text = pokemon.nombre
        }
    }
}