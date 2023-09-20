import * as bcrypt from 'bcrypt'
export default class PasswordHash {
    /**
     * @returns hashed password
     * @param PlainPassword plain password
     */
    public static async hash(PlainPassword: string) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(PlainPassword, salt)
        return hashedPassword        
    
    }
}