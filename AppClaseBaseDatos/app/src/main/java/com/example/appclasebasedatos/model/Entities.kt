package com.example.appclasebasedatos.model
import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.io.Serializable
@Entity(tableName = "tblPet")
data class Pet (
    @PrimaryKey(autoGenerate = true)
    @ColumnInfo(name="id")
    var id :Int,
    @ColumnInfo(name="nombre")
    var nombre :String,
    @ColumnInfo(name="raza")
    var raza:String,
    @ColumnInfo(name="preferencias")
    var preferencias : String
    ):Serializable
