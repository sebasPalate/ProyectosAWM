package com.example.fragmentos.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.example.fragmentos.model.Pelicula

@Database(entities = [Pelicula::class], version = 1, exportSchema = false)
abstract class BaseDatos : RoomDatabase() {
    abstract fun PeliculaDAO(): PeliculaDAO

    companion object {
        var instancia: BaseDatos? = null
        fun getIntance(context: Context): BaseDatos {
            if (instancia == null) {
                instancia = Room.databaseBuilder(
                    context,
                    BaseDatos::class.java,
                    "bdPeliculas"
                ).build()
            }
            return instancia as BaseDatos
        }
    }
}