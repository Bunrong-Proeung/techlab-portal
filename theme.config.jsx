export default {
  logo: (
    <span className="font-bold flex items-center gap-2">
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
      <link
        href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, html, body, button, input, select, textarea {
          font-family: 'Kantumruy Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }
        code, pre, kbd {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
        }
      `}</style>
    </>
  ),
}