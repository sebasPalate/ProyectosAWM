package com.example.appclase2

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.SearchView
import android.widget.Toast
import com.example.appclase2.databinding.ActivityMainBinding
import java.util.Locale

class MainActivity : AppCompatActivity() {

    private lateinit var adapter: PokemonAdapter
    private lateinit var binding: ActivityMainBinding
    private lateinit var search: SearchView
    private var pokemons: List<Pokemon> = listOf()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //setContentView(R.layout.activity_main)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        search = binding.edtBuscador
        // 1. Configurar el adaptador
        this.configureAdapter()
        // 2. Cargar la data
        this.loadData()
        // 3. Ejecutar los eventos

        ////////////////////////
        search.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String?): Boolean {
                return false
            }

            override fun onQueryTextChange(newText: String?): Boolean {
                filterList(newText)
                return true
            }

        })

    }

    fun configureAdapter() {
        this.adapter = PokemonAdapter()
        this.binding.rvPokedex.adapter = adapter
        adapter.setOnClickPokemon = {
            val bundle = Bundle().apply {
                putSerializable("key_pokemon", it)
            }
            val intent = Intent(this, DetalleActivityPokemon::class.java).apply {
                putExtras(bundle)
            }
            startActivity(intent)
        }
    }

    fun loadData() {
        // Crear lista estática
        this.pokemons = listOf(
            Pokemon("Bulbasaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"),
            Pokemon("Yvysaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"),
            Pokemon("Venusaur", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"),
            Pokemon(
                "Charmander",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
            ),
            Pokemon(
                "Charmeleon",
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
            ),
            Pokemon("Charizard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"),
            Pokemon("Squirtle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"),
            Pokemon("Wartortle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"),
            Pokemon("Blastoise", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"),
            Pokemon("Caterpie", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"),
        )
        adapter.updateListPokemon(this.pokemons)
    }

    private fun filterList(query: String?) {

        if (query != null) {
            val filteredList = ArrayList<Pokemon>()
            for (i in pokemons) {
                if (i.nombre.lowercase(Locale.ROOT).contains(query)) {
                    filteredList.add(i)
                }
            }

            if (filteredList.isEmpty()) {
                Toast.makeText(this, "No Data found", Toast.LENGTH_SHORT).show()
            } else {
                adapter.updateListPokemon(filteredList)
            }
        }
    }

}