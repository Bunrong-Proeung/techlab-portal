import React, { useState } from 'react'

export default function FilterCalc() {
  const [r, setR] = useState('10') // kOhms
  const [c, setC] = useState('100') // nF

  const rVal = parseFloat(r) * 1000 // Convert kOhm to Ohm
  const cVal = parseFloat(c) * 1e-9 // Convert nF to Farad

  let fc = 0
  if (rVal > 0 && cVal > 0) {
    fc = 1 / (2 * Math.PI * rVal * cVal)
  }

  return (
    <div style={{
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '24px',
      background: 'rgba(15, 23, 42, 0.6)',
      margin: '20px 0',
      color: '#f8fafc'
    }}>
      <h3 style={{ marginTop: 0, color: '#38bdf8' }}>⚡ RC Low-Pass Filter Cutoff Calculator</h3>
      <p style={{ fontSize: '13px', color: '#94a3b8' }}>
        រូបមន្តគណនាប្រេកង់កាត់ (Cutoff Frequency): <code>fc = 1 / (2π × R × C)</code>
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <div style={{ flex: 1, minWidth: '140px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>
            Resistor R (kΩ)
          </label>
          <input
            type="number"
            value={r}
            onChange={(e) => setR(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              background: '#0f172a',
              color: '#fff'
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: '140px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>
            Capacitor C (nF)
          </label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              background: '#0f172a',
              color: '#fff'
            }}
          />
        </div>
      </div>

      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: '14px', color: '#94a3b8' }}>Cutoff Frequency (-3dB):</span>
        <span style={{ fontFamily: 'monospace', fontSize: '20px', fontWeight: 700, color: '#38bdf8' }}>
          {fc >= 1000 ? `${(fc / 1000).toFixed(2)} kHz` : `${fc.toFixed(2)} Hz`}
        </span>
      </div>
    </div>
  )
}