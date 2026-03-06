# 🗄️ Mongoose Basics Practice

This repository contains small practice code for learning the **basics of Mongoose** in a Node.js backend.
The goal is to understand how MongoDB works with Mongoose and how to structure data using **schemas and models**.

---

## 📚 What I Practiced

* Connecting Node.js with **MongoDB**
* Installing and using **Mongoose**
* Creating **Schemas**
* Creating **Models**
* Defining **data types**
* Creating and saving **documents (objects)**
* Using **timestamps**

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Concepts Covered

### 1️⃣ Schema

A **schema** defines the structure of the data stored in MongoDB.

Example:

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
}, { timestamps: true })
```

---

### 2️⃣ Model

A **model** is created from a schema and is used to interact with the database.

```js
const User = mongoose.model("User", userSchema)
```

---

### 3️⃣ Creating Data

```js
const user = new User({
  name: "Ali",
  age: 22,
  city: "Faisalabad"
})

user.save()
```

---

### 4️⃣ Timestamps

Using:

```js
{ timestamps: true }
```

Mongoose automatically adds:

* `createdAt`
* `updatedAt`

---

## 🎯 Learning Goal

This project is only for **learning the fundamentals of Mongoose**, including:

* Data modeling
* Schema design
* Saving data in MongoDB
* Understanding backend database structure



