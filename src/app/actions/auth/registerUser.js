"use server"
import dbConnect, { collectionsObj } from '@/lib/dbConected'
import bcrypt from 'bcrypt'

export default async function registerUser(payload) {
    const userCollection = dbConnect(collectionsObj.userCollection)

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email: payload.email })
    if (existingUser) return null

    // Hash password before storing
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds)

    // Insert user into database
    const result = await userCollection.insertOne({
        ...payload,
        password: hashedPassword, // Store hashed password
    })

    // Return newly created user
    if (result.acknowledged) {
        const newUser = await userCollection.findOne({ _id: result.insertedId })
        return newUser
    }

    return null
}
