package com.example.fragmentos

import androidx.recyclerview.widget.RecyclerView
import android.view.LayoutInflater
import android.view.ViewGroup

import com.example.fragmentos.placeholder.PlaceholderContent.PlaceholderItem
import com.example.fragmentos.databinding.FragmentItemBinding
import com.example.fragmentos.model.Pelicula

/**
 * [RecyclerView.Adapter] that can display a [PlaceholderItem].
 * TODO: Replace the implementation with code for your data type.
 */
class MyItemRecyclerViewAdapter(
    private val peliculas: MutableList<PlaceholderItem>
) : RecyclerView.Adapter<MyItemRecyclerViewAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {

        return ViewHolder(
            FragmentItemBinding.inflate(
                LayoutInflater.from(parent.context),
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val pelicula = peliculas[position]
        holder.bind(pelicula)
    }

    override fun getItemCount(): Int = peliculas.size

    inner class ViewHolder(binding: FragmentItemBinding) : RecyclerView.ViewHolder(binding.root) {
        private var binding: FragmentItemBinding = FragmentItemBinding.bind(itemView)
        fun bind(pelicula: PlaceholderItem) {
            binding.nombre.text = pelicula.nombre
            binding.categoria.text = pelicula.categoria
            binding.descripcion.text = pelicula.descripcion
        }
    }

}