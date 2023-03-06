package com.example.fragmentos.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "tblPelicula")
data class Pelicula(
    @PrimaryKey(autoGenerate = true)
    @ColumnInfo(name = "id")
    var id: Int,
    @ColumnInfo(name = "nombre")
    var nombre: String,
    @ColumnInfo(name = "categoria")
    var categoria: String,
    @ColumnInfo(name = "descripcion")
    var descripcion: String
) : java.io.Serializable