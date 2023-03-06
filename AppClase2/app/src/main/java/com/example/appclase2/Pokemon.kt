package com.example.appclase2

import java.io.Serializable;

data class Pokemon(
    var nombre: String,
    var url: String

// Serializacion
) : Serializable