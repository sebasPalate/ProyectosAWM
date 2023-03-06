package com.example.fragmentos.placeholder

import com.example.fragmentos.MyItemRecyclerViewAdapter
import com.example.fragmentos.database.BaseDatos
import java.util.ArrayList
import java.util.HashMap

/**
 * Helper class for providing sample content for user interfaces created by
 * Android template wizards.
 *
 * TODO: Replace all uses of this class before publishing your app.
 */
object PlaceholderContent {

    /**
     * An array of sample (placeholder) items.
     */
    val ITEMS: MutableList<PlaceholderItem> = ArrayList()

    /**
     * A map of sample (placeholder) items, by ID.
     */
    val ITEM_MAP: MutableMap<String, PlaceholderItem> = HashMap()

    private val COUNT = 10

    init {
        // Add some sample items.
        for (i in 1..COUNT) {
            addItem(createPlaceholderItem(i))
        }
    }

    private fun addItem(item: PlaceholderItem) {
        ITEMS.add(item)
        ITEM_MAP.put(item.id, item)
        ITEM_MAP.put(item.nombre, item)
        ITEM_MAP.put(item.categoria, item)
        ITEM_MAP.put(item.descripcion, item)

    }

    private fun createPlaceholderItem(position: Int): PlaceholderItem {
        return PlaceholderItem(
            position.toString(),
            makePeliculas(position),
            makeCategories(position),
            makeDescription(position)
        )
    }

    private fun makePeliculas(position: Int): String {
        val builder = StringBuilder()
        builder.append("Avengers ")
        //builder.append("Avengers ").append(position)
        return builder.toString()
    }

    private fun makeCategories(position: Int): String {
        val builder = StringBuilder()
        builder.append("Acción")
        return builder.toString()
    }

    private fun makeDescription(position: Int): String {
        val builder = StringBuilder()
        builder.append("Un equipo ficticio de superhéroes que aparecen en los cómics ")
        return builder.toString()
    }

    /**
     * A placeholder item representing a piece of content.
     */
    data class PlaceholderItem(
        val id: String,
        val nombre: String,
        val categoria: String,
        val descripcion: String
    ) {
        override fun toString(): String = nombre
    }
}