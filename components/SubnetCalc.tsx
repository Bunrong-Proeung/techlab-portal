import React, { useState } from 'react'

export default function SubnetCalc() {
  const [ip, setIp] = useState('192.168.10.0')
  const [cidr, setCidr] = useState(24)

  const calculateSubnet = () => {
    try {
      const parts = ip.trim().split('.').map(Number)
      if (parts.length !== 4 || parts.some(n => isNaN(n) || n < 0 || n > 255)) {
        return null
      }

      const ipNum = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]
      const maskNum = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0
      const netNum = (ipNum & maskNum) >>> 0
      const bcastNum = (netNum | (~maskNum >>> 0)) >>> 0

      const toIP = (num: number) => [
        (num >>> 24) & 255,
        (num >>> 16) & 255,
        (num >>> 8) & 255,
        num & 255
      ].join('.')

      const totalHosts = Math.pow(2, 32 - cidr)
      const usableHosts = cidr >= 31 ? 0 : totalHosts - 2

      return {
        network: toIP(netNum),
        broadcast: toIP(bcastNum),
        mask: toIP(maskNum),
        usableHosts: usableHosts > 0 ? usableHosts : 0,
        firstHost: cidr >= 31 ? 'N/A' : toIP(netNum + 1),
        lastHost: cidr >= 31 ? 'N/A' : toIP(bcastNum - 1)
      }
    } catch {
      return null
    }
  }

  const result = calculateSubnet()

  return (
    <div style={{
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '24px',
      background: 'rgba(15, 23, 42, 0.6)',
      margin: '20px 0',
      color: '#f8fafc'
    }}>
      <h3 style={{ marginTop: 0, color: '#22c55e' }}>🖩 IPv4 Subnet Calculator</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <div style={{ flex: 2, minWidth: '160px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>IP Address</label>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
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
        <div style={{ flex: 1, minWidth: '100px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>Prefix (/{cidr})</label>
          <select
            value={cidr}
            onChange={(e) => setCidr(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #475569',
              background: '#0f172a',
              color: '#fff'
            }}
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((val) => (
              <option key={val} value={val}>/{val}</option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '16px',
          borderRadius: '8px'
        }}>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Network ID:</span>
            <div style={{ fontFamily: 'monospace', fontWeight: 600, color: '#38bdf8' }}>{result.network}</div>
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Subnet Mask:</span>
            <div style={{ fontFamily: 'monospace', fontWeight: 600 }}>{result.mask}</div>
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Broadcast IP:</span>
            <div style={{ fontFamily: 'monospace', fontWeight: 600, color: '#f43f5e' }}>{result.broadcast}</div>
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Usable Hosts:</span>
            <div style={{ fontFamily: 'monospace', fontWeight: 600, color: '#22c55e' }}>{result.usableHosts} Hosts</div>
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>First Usable:</span>
            <div style={{ fontFamily: 'monospace', fontWeight: 600 }}>{result.firstHost}</div>
          </div>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Last Usable:</span>
            <div style={{ fontFamily: 'monospace', fontWeight: 600 }}>{result.lastHost}</div>
          </div>
        </div>
      )}
    </div>
  )
}