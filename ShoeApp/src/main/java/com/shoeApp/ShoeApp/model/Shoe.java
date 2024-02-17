package com.shoeApp.ShoeApp.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Shoe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String model;
    private float size;
    private String color;
    private float price;
    private String details;
    private String imageUrl;
    private String imageUrl2;
    private String imageUrl3;
    @Column(nullable = false, updatable = false)
    private String shoeCode;
    private int quantity;

    public Shoe(){

    }

    public Shoe(String model, float size, String color, float price, String details, String imageUrl, String imageUrl2, String imageUrl3, String shoeCode, int quantity) {
        this.model = model;
        this.size = size;
        this.color = color;
        this.price = price;
        this.details = details;
        this.imageUrl = imageUrl;
        this.imageUrl2 = imageUrl2;
        this.imageUrl3 = imageUrl3;
        this.shoeCode = shoeCode;
        this.quantity = quantity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setSize(float size) {
        this.size = size;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setImageUrl2(String imageUrl) {
        this.imageUrl2 = imageUrl;
    }

    public void setImageUrl3(String imageUrl) {
        this.imageUrl3 = imageUrl;
    }

    public void setShoeCode(String shoeCode) {
        this.shoeCode = shoeCode;
    }

    public Long getId() {
        return id;
    }

    public String getModel() {
        return model;
    }

    public float getSize() {
        return size;
    }

    public String getColor() {
        return color;
    }

    public float getPrice() {
        return price;
    }

    public String getDetails() {
        return details;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getImageUrl2() {
        return imageUrl2;
    }

    public String getImageUrl3() {
        return imageUrl3;
    }

    public String getShoeCode() {
        return shoeCode;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Shoe{" +
                "id=" + id +
                ", model='" + model + '\'' +
                ", size=" + size +
                ", color='" + color + '\'' +
                ", price=" + price +
                ", details='" + details + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", imageUrl2='" + imageUrl2 + '\'' +
                ", imageUrl3='" + imageUrl3 + '\'' +
                ", shoeCode='" + shoeCode + '\'' +
                ", quantity=" + quantity +
                '}';
    }
}
