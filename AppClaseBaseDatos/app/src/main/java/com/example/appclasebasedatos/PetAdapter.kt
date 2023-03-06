package com.example.appclasebasedatos


import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.appclasebasedatos.databinding.ItemPetBinding
import com.example.appclasebasedatos.model.Pet

//Definir donde se manejan los datos,
// crear el view holder,
// implementar los metodos del adaptador
class PetAdapter (var pets:List<Pet> = emptyList()): RecyclerView.Adapter<PetAdapter.PetAdapterViewHolder>() {

    //definir las funciones para manipular los registro
    lateinit var setOnClickListenerPetEdit: (Pet)->Unit
    lateinit var setOnClickListenerPetDelete:(Pet)->Unit
    //Crear el ViewHolder
    inner class PetAdapterViewHolder(itemView:View):RecyclerView.ViewHolder(itemView){
        private var binding : ItemPetBinding=ItemPetBinding.bind(itemView)
        fun bind(pet: Pet){
            binding.txtNombreMascota.text =pet.nombre
            binding.txtRazaMascota.text = pet.raza
            binding.txtPreferencias.text = pet.preferencias

            binding.btnEditar.setOnClickListener{
                setOnClickListenerPetEdit(pet)
            }

            binding.btnEliminar.setOnClickListener{
                setOnClickListenerPetDelete(pet)
            }

        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PetAdapterViewHolder {
        //Para implemetar una vista
        val view =LayoutInflater.from(parent.context).inflate(R.layout.item_pet,parent,false)
        return PetAdapterViewHolder(view)
    }

    override fun onBindViewHolder(holder: PetAdapterViewHolder, position: Int) {
        //posicion de cada elemenot en la vista
        val pet = pets[position]
        holder.bind(pet)
    }

    override fun getItemCount(): Int {
        return pets.size
    }

    fun updateListPets(pets:List<Pet>){
        this.pets=pets
        notifyDataSetChanged()
    }
}