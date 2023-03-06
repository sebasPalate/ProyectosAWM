package com.example.fragmentoslista

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toolbar
import androidx.fragment.app.Fragment

class MainActivity : AppCompatActivity() {

    lateinit var moviesfragment: MoviesFragment

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Agregar Fragmento
        moviesfragment = supportFragmentManager.findFragmentById(R.id.movies_list) as MoviesFragment

        if (moviesfragment == null) {
            supportFragmentManager.findFragmentById(R.id.movies_list)
            supportFragmentManager.beginTransaction().add(R.id.movies_list, moviesfragment).commit()
        }
    }
}