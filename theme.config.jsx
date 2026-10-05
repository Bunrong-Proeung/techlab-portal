export default {
  logo: (
    <span style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
      ⚡ <span>TechLab Portal</span>
    </span>
  ),
  project: {
    link: 'https://github.com',
  },
  docsRepositoryBase: 'https://github.com',
  footer: {
    text: '© 2026 TechLab Portal. All rights reserved.',
  },
  copy: {
    copyCode: true,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* ទាញយក Noto Sans Khmer គ្រប់កម្រាស់ ទាំងស្រាល និងដិត (Bold) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, *::before, *::after, html, body, button, input, select, textarea {
          font-family: 'Noto Sans Khmer', system-ui, -apple-system, sans-serif !important;
          -webkit-font-smoothing: antialiased;
        }
        code, pre, kbd {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
        }
      `}</style>
    </>
  ),
}