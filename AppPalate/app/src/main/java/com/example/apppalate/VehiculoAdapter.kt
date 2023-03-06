package com.example.apppalate

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.apppalate.databinding.ItemVehiculoBinding
import com.example.apppalate.model.Vehiculo

class VehiculoAdapter(var vehiculos: List<Vehiculo> = emptyList()) :
    RecyclerView.Adapter<VehiculoAdapter.VehiculoAdapterViewHolder>() {
    //definir las funciones para manipular los registro
    lateinit var setOnClickListenerPetEdit: (Vehiculo) -> Unit
    lateinit var setOnClickListenerPetDelete: (Vehiculo) -> Unit

    //Crear el ViewHolder
    inner class VehiculoAdapterViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        private var binding: ItemVehiculoBinding = ItemVehiculoBinding.bind(itemView)
        fun bind(vehiculo: Vehiculo) {
            binding.txtMarca.text = vehiculo.marca
            binding.txtModelo.text = vehiculo.modelo
            binding.txtMatricula.text = vehiculo.matricula
            binding.txtColor.text = vehiculo.color

            binding.btnEditar.setOnClickListener {
                setOnClickListenerPetEdit(vehiculo)
            }

            binding.btnEliminar.setOnClickListener {
                setOnClickListenerPetDelete(vehiculo)
            }

        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): VehiculoAdapterViewHolder {
        //Para implemetar una vista
        val view =
            LayoutInflater.from(parent.context).inflate(R.layout.item_vehiculo, parent, false)
        return VehiculoAdapterViewHolder(view)
    }

    override fun onBindViewHolder(holder: VehiculoAdapterViewHolder, position: Int) {
        //posicion de cada elemenot en la vista
        val envio = vehiculos[position]
        holder.bind(envio)
    }

    override fun getItemCount(): Int {
        return vehiculos.size
    }

    //Editar
    fun updateListPets(vehiculo: List<Vehiculo>) {
        this.vehiculos = vehiculo
        notifyDataSetChanged()
    }
}