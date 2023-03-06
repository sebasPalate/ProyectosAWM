package com.example.apppalate.api

import com.example.apppalate.model.Vehiculo
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Path

interface ApiService {
    @GET("vehiculos")
    fun fetchAllUsers(): Call<List<Vehiculo>>

    @Headers("Content-Type: application/json")
    @POST("vehiculos")
    fun agregarVehiculo(@Body vehiculo: Vehiculo): Call<Void>

    @Headers("Content-Type: application/json")
    @PUT("vehiculos/{id}")
    fun editarVehiculo(@Path("id") id: String, @Body vehiculo: Vehiculo): Call<Void>

    @DELETE("vehiculos/{id}")
    fun eliminarVehiculo(@Path("id") vehiculo: String): Call<Void>
}