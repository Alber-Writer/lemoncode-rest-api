import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { Pagination } from 'common/components';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, pageInfo } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleVisit = (id: number) => {
    navigate(linkRoutes.viewCharacter(id.toString()));
  };

  const handlePageChange = (page: number) => loadCharacterCollection(page);

  return (
    <>
    {/* TODO: add loading */}
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onView={handleVisit}
      />
      <div>
        {pageInfo && (
          <Pagination
            changeEffects={handlePageChange}
            initialCurrentPage={1}
            pagesQty={pageInfo.pages}
            nextPage={pageInfo.next}
            prevPage={pageInfo.prev}
          />
        )}
      </div>
    </>
  );
};
