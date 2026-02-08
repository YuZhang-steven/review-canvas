/**
 * Generates a unique ID with a optional prefix
 * Format: {prefix}-{timestamp}-{randomSuffix}
 * Example: "comment-1701234567890-a1b2c3d4"
 */
export function generateId(prefix?: string): string {
  const timestamp = Date.now().toString(36);
  const randomSuffix = Math.random().toString(36).substring(2, 10);
  
  const id = `${timestamp}-${randomSuffix}`;
  
  return prefix ? `${prefix}-${id}` : id;
}

/**
 * Generates a short unique ID suitable for UI display
 * Format: {randomChars}
 * Example: "a1b2c3d4"
 */
export function generateShortId(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generates a UUID v4 compliant ID
 * Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

