import { getLogger, configure } from "log4js"
import config from "../config/index"

configure(config.logger);
export const accessLogger = getLogger('access')
export const dbLogger = getLogger('db')
export default getLogger();