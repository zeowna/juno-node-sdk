export class RequestHelper {
  static toEncodedUrlFormat(payload: any) {
    return Object.keys(payload)
      .filter(key => payload[key] !== null && payload[key] !== undefined)
      .map(key => `${key}=${payload[key]}`).join('&');
  }
}
