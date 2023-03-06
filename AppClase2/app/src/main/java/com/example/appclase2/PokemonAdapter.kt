package com.example.appclase2

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.appclase2.databinding.ItemPokedexBinding
import com.squareup.picasso.Picasso

class PokemonAdapter constructor(var pokemon: List<Pokemon> = listOf()) :
    RecyclerView.Adapter<PokemonAdapter.PokemonAdapterViewHolder>() {
    //Método lambda para pasar la responsabilidad del clic al activity
    lateinit var setOnClickPokemon: (Pokemon) -> Unit

    //Clase interna ViewHolder para manejar tanto la data como el xml
    inner class PokemonAdapterViewHolder constructor(itemView: View) :
        RecyclerView.ViewHolder(itemView) {
        private val binding: ItemPokedexBinding = ItemPokedexBinding.bind(itemView)

        fun bind(pokemon: Pokemon) = with(binding) {
            txtNombrePokedex.text = pokemon.nombre
            Picasso.get().load(pokemon.url).error(R.drawable.ic_launcher_background)
                .into(imgPokemon)

            root.setOnClickListener {
                setOnClickPokemon(pokemon)
            }
        }
    }

    fun updateListPokemon(pokemon: List<Pokemon>) {
        this.pokemon = pokemon
        notifyDataSetChanged()
    }

    /**
     * Permite indicar con que vista vamos a trabajar (item Pokedex)
     */
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PokemonAdapterViewHolder {
        val view: View =
            LayoutInflater.from(parent.context).inflate(R.layout.item_pokedex, parent, false)
        return PokemonAdapterViewHolder(view)
    }

    /**
     * Se va a repetir tantas veces elementos existen en la lista
     */
    override fun onBindViewHolder(holder: PokemonAdapterViewHolder, position: Int) {
        val pokemon: Pokemon = this.pokemon[position]
        holder.bind(pokemon)
    }

    /**
     * Cuenta los elementos en la lista
     */
    override fun getItemCount(): Int {
        return this.pokemon.size
    }
}