package com.example.appclasebasedatos.database

import androidx.lifecycle.LiveData
import androidx.room.*
import com.example.appclasebasedatos.model.Pet

@Dao
interface PetDAO {
    //Definir el CRUD

    //Insert que devuelve el numero de registro insertado
    @Insert
    fun insert(pet:Pet):Long

    //Actualizar sin devolver nada
    @Update
    fun update(pet: Pet)

    @Delete
    fun delete (pet: Pet)

    //Devuelve toda la lista de mascotas
    @Query("select * from tblPet order by id")
    fun getPets() :LiveData<List<Pet>>

    @Query("select * from tblPet where id=:idInput")
    fun getPetById(idInput:Int): List<Pet>



}