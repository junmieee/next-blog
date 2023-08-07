import { NotionAPI } from 'notion-client'


const notion = new NotionAPI()

export default recordMap = await notion.getPage('9561708319f04c53b7d318d39139e80e?pvs=4')
