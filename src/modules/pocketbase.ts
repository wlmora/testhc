// Import the PocketBase JS library
import PocketBase from 'pocketbase'
import { pocketBaseSymbol } from '../symbols/injectionSymbols'

// Init the PocketBase instance with the correct URL.
// By setting this in a .env file you can easily switch between development and production environments
const client = new PocketBase(import.meta.env.VITE_POCKETBASE_URL)

// Import custom pocketBase type

export const install: UserModule = ({ app }) => {
  app.provide(pocketBaseSymbol, client)
}
export default install

