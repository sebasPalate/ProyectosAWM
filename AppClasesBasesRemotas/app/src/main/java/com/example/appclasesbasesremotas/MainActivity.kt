package com.example.appclasesbasesremotas

import android.R
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.toolbox.JsonArrayRequest
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.example.appclasesbasesremotas.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        //leerDatos()
        leerDatosTodos()
    }

    //fun leerDatos() {
    //  val url = "https://jsonplaceholder.typicode.com/posts/1"
    //val sentencia = Volley.newRequestQueue(this)
    //val jsonObjectRequest = JsonObjectRequest(
    //  Request.Method.GET, url, null, { response ->
    //    binding.editUserID.setText(response.getString("userId"))
    //  binding.editTitle.setText(response.getString("id"))
    //binding.editBody.setText(response.getString("title"))
    //}, { error ->
    //  Toast.makeText(this, "Error", Toast.LENGTH_SHORT).show()
    //}
    //)
    //sentencia.add(jsonObjectRequest)
    //}

    // llamada a todos los registros
    fun leerDatosTodos() {
        val url = "https://jsonplaceholder.typicode.com/posts"
        val sentencia = Volley.newRequestQueue(this)
        val jsonObjectRequest = JsonArrayRequest(
            Request.Method.GET, url, null, { response ->
                val posts = ArrayList<String>()
                for (i in 0 until response.length()) {
                    posts.add(response.getJSONObject(i)["title"].toString())
                }
                val adapter = ArrayAdapter<String>(this, R.layout.simple_list_item_1, posts)
                val list = binding.lvDatos
                list.adapter = adapter
            }, { error -> }
        )
        sentencia.add(jsonObjectRequest)
    }


}