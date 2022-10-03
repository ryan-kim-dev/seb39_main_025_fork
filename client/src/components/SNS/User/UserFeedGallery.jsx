import React from 'react';
import { UserFeedGalleryLayout, GalleryCard } from './UserFeedStyle';

function UserFeedGallery({ items }) {
  return (
    <UserFeedGalleryLayout>
      <GalleryCard title="POST">
        {items.images?.map((item) => {
          return (
            <GalleryCard.Grid className="card-grid" key={item.id}>
              <img
                alt="post"
                src={`https://server.staybuddy.net/upload/${item.postImageUrl}`}
              />
              <p>{item.caption}</p>
            </GalleryCard.Grid>
          );
        })}
      </GalleryCard>
    </UserFeedGalleryLayout>
  );
}

export default UserFeedGallery;
