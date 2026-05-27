import React from 'react'
import './css/UserDetail.css'

export default function UserDetail({ user, onBack, isLiked, onToggleLike, isFollowed, onToggleFollow }) {
  return (
    <div className="halaman-detail">
      <button className="button-kembali" onClick={onBack}>
        back
      </button>
 
      <div className="kartu-profil">

        <div className="kepala-profil">
          <h2 className="nama-pengguna">{user.name}</h2>
          <p className="handle-pengguna">@{user.username}</p>
        </div>
 
        <hr className="garis-pemisah" />
 

        <div className="baris-info">
          <span className="label-info">Email</span>
          <span className="teks-info">{user.email}</span>
        </div>
        <div className="baris-info">
          <span className="label-info">Phone Number</span>
          <span className="teks-info">{user.phone}</span>
        </div>
        <div className="baris-info">
          <span className="label-info">Website</span>
          <a
            className="tautan-info"
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {user.website}
          </a>
        </div>
 

        <p className="judul">Address</p>
        <div className="baris-info">
          <span className="teks-info">
            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </span>
        </div>
 

        <p className="judul">Company</p>
        <div className="baris-info">
          <span className="teks-info">
            {user.company.name} — <em>"{user.company.catchPhrase}"</em>
          </span>
        </div>
 

        <div className="baris-tombol">
          <button
            className={`button-suka ${isLiked ? 'sudah-suka' : ''}`}
            onClick={() => onToggleLike(user.id)}
          >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
          </button>
 
          <button
            className={`button-ikuti ${isFollowed ? 'sudah-ikuti' : ''}`}
            onClick={() => onToggleFollow(user.id)}
          >
            {isFollowed ? '👥 Following' : '👤 Follow'}
          </button>
        </div>
      </div>
    </div>
  )
}