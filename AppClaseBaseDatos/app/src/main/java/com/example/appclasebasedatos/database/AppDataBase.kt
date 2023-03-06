package com.example.appclasebasedatos.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.example.appclasebasedatos.model.Pet

@Database(entities = [Pet::class], version = 1, exportSchema = false)
abstract class AppDataBase : RoomDatabase() {
    //Definir el DAO a utilizar
    abstract fun petDao(): PetDAO

    //Definir la instancia de la base de datos
    companion object {
        var instacia: AppDataBase? = null

        //manejar la instancia
        fun getInstance(context: Context): AppDataBase {
            if (instacia == null) {
                instacia = Room.databaseBuilder(
                    context,
                    AppDataBase::class.java,
                    "bdPets"
                ).build()
            }
            return instacia as AppDataBase
        }
    }
}