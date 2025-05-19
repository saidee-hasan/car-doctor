"use server"
import dbConnect, { collectionsObj } from '@/lib/dbConected';
import bcrypt from 'bcrypt';

export default async function loginUser(payload) {
    const { email, password } = payload;
   
    const userCollection = dbConnect(collectionsObj.userCollection);

    const user = await userCollection.findOne({ email });


    if (!user) {
 
        return null;
    }

    // Fix: Corrected bcrypt.compare() argument order
    const isPasswordValid = await bcrypt.compare(password, user.password);
  

    if (!isPasswordValid) {
        console.log("Incorrect password!");
        return null;
    }

    return user; 
}
