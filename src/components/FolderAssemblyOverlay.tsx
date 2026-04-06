import type { MutableRefObject, RefObject } from 'react';
import IntroAssemblyPreview from './IntroAssemblyPreview';

export type FolderOrigin = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type AssemblyPiece = {
  id: string;
  zIndex: number;
  clipPath: string;
  scatter: {
    x: number;
    y: number;
    rotation: number;
    scale: number;
  };
};

export const ASSEMBLY_PIECES: AssemblyPiece[] = [
  {
    id: 'piece-tl',
    zIndex: 18,
    clipPath: 'polygon(0% 0%, 51.5% 0%, 56.5% 10%, 49.5% 22%, 53.5% 33%, 38% 36.5%, 25% 31.5%, 12% 38.5%, 0% 34.5%)',
    scatter: { x: -0.024, y: -0.06, rotation: -1.7, scale: 0.93 },
  },
  {
    id: 'piece-tr',
    zIndex: 17,
    clipPath: 'polygon(50% 0%, 100% 0%, 100% 34.5%, 88% 33.5%, 78% 37.5%, 65% 30.5%, 52% 34.5%, 48% 22%, 55% 10%)',
    scatter: { x: 0.02, y: -0.04, rotation: 1.2, scale: 0.95 },
  },
  {
    id: 'piece-ml',
    zIndex: 16,
    clipPath: 'polygon(0% 33%, 12% 37%, 25% 30%, 38% 35%, 52% 33%, 47.5% 45%, 55.5% 55%, 50.5% 66%, 37% 65.5%, 28% 70.5%, 15% 64.5%, 0% 67.5%)',
    scatter: { x: -0.021, y: 0.01, rotation: -1.1, scale: 0.96 },
  },
  {
    id: 'piece-mr',
    zIndex: 15,
    clipPath: 'polygon(52% 33%, 65% 29%, 78% 36%, 88% 32%, 100% 33%, 100% 67.5%, 85% 69.5%, 75% 63.5%, 62% 70.5%, 49% 67.5%, 54% 55%, 46% 45%)',
    scatter: { x: 0.025, y: -0.01, rotation: 1.4, scale: 0.94 },
  },
  {
    id: 'piece-bl',
    zIndex: 14,
    clipPath: 'polygon(0% 66%, 15% 63%, 28% 69%, 37% 64%, 49% 66%, 54.5% 78%, 48.5% 88%, 51.5% 100%, 0% 100%)',
    scatter: { x: -0.018, y: 0.05, rotation: -0.9, scale: 0.97 },
  },
  {
    id: 'piece-br',
    zIndex: 13,
    clipPath: 'polygon(49% 66%, 62% 69%, 75% 62%, 85% 68%, 100% 66%, 100% 100%, 50% 100%, 47% 88%, 53% 78%)',
    scatter: { x: 0.015, y: 0.06, rotation: 1.5, scale: 0.96 },
  },
];

type FolderAssemblyOverlayProps = {
  overlayRef: RefObject<HTMLDivElement | null>;
  backdropRef: RefObject<HTMLDivElement | null>;
  auraRef: RefObject<HTMLDivElement | null>;
  pieceRefs: MutableRefObject<(HTMLDivElement | null)[]>;
};

export default function FolderAssemblyOverlay({
  overlayRef,
  backdropRef,
  auraRef,
  pieceRefs,
}: FolderAssemblyOverlayProps) {
  return (
    <div ref={overlayRef} className="portfolio-assembly-overlay" aria-hidden="true">
      <div ref={backdropRef} className="portfolio-assembly-backdrop" />
      <div ref={auraRef} className="portfolio-assembly-aura" />

      {ASSEMBLY_PIECES.map((piece, index) => (
        <div
          key={piece.id}
          ref={(element) => {
            pieceRefs.current[index] = element;
          }}
          className="portfolio-assembly-file"
          data-assembly-piece={piece.id}
        >
          <IntroAssemblyPreview />
        </div>
      ))}
    </div>
  );
}
