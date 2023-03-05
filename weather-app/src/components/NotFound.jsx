import React from 'react'
import '../NotFound.css';

export default function NotFound() {
  return (
      <div className="not-found">
        <div className="not-found-404">
          <h1>404</h1>
          <h2>Oops! Sayfa bulunamadı</h2>
          <a href="/cities">Şehirler sayfasına dön</a>
        </div>
    </div>
  )
}
