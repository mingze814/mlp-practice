import zlib, struct, os
def png(path, n, bg, fg):
    def inside(x, y):  # nabla: outer inverted triangle minus inner one
        s = n * 0.62; top, bot = n * 0.5 - s * 0.42, n * 0.5 + s * 0.42; t = n * 0.085
        if not (top <= y <= bot): return False
        half = (bot - y) / (bot - top) * s * 0.5
        d = abs(x - n / 2)
        if d > half: return False
        return not (y >= top + t and d <= half - t * 1.2)
    raw = bytearray()
    for y in range(n):
        raw.append(0)
        for x in range(n):
            raw += bytes(fg if inside(x + .5, y + .5) else bg)
    def ch(t, d): 
        c = struct.pack(">I", len(d)) + t + d
        return c + struct.pack(">I", zlib.crc32(t + d) & 0xffffffff)
    data = b"\x89PNG\r\n\x1a\n" + ch(b"IHDR", struct.pack(">IIBBBBB", n, n, 8, 2, 0, 0, 0)) + ch(b"IDAT", zlib.compress(bytes(raw), 9)) + ch(b"IEND", b"")
    open(path, "wb").write(data)
r = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
png(os.path.join(r, "apple-touch-icon.png"), 180, (31, 58, 95), (232, 240, 250))
png(os.path.join(r, "icon-512.png"), 512, (31, 58, 95), (232, 240, 250))
