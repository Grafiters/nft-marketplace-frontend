import path from "path"
import { fetchJson, generateJson } from "../../tools/generate-json"
import { Collections } from "./interface"

const paths = `collections`
const filename = `data.json`

const collectionFile = {
    generate: async (data: any): Promise<any> => {
        console.log(`data genrate => ${data}`);
        
        const generate = await generateJson(paths, filename, data)
        if (!generate) {
            return true
        }
        return generate
    },
    fetch: async (): Promise<Collections[]> => {
        try {
            const response = await fetchJson(paths, filename)
            if (!Array.isArray(response) || response.length === 0) {
                return [];
            }

            return response as Collections[];
        } catch (error: any) {
            return error
        }
    }
}

export { collectionFile }