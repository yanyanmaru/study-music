import Player from './../components/Player'

export default function Home() {
  return (
    <main className='mt-8 flex justify-center gap-8'>
      <Player file='first.mp3' />
      <Player file='first.mp3' />
      <Player file='first.mp3' />
      <Player file='first.mp3' />
      <Player file='first.mp3' />
    </main>
  );
}
