package com.example.fragmentos.database

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Query
import com.example.fragmentos.model.Pelicula

@Dao
interface PeliculaDAO {
    @Query("select * from tblPelicula order by id")
    fun getPeliculas(): LiveData<List<Pelicula>>
}