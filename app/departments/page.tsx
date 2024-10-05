import Image from 'next/image'
export default function Page() {
  return (
    <div className="px-8">
      <div className="bg-gradient-to-r from-[#004aad] to-[#cb6ce6] p-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-lg bg-slate-200 p-3">
            <Image
              src={'/images/icons/it.png'}
              alt={''}
              width={100}
              height={100}
            />
          </div>
          <div className="rounded-lg bg-slate-200 p-3">
            <Image
              src={'/images/icons/health.png'}
              alt={''}
              width={100}
              height={100}
            />
          </div>
          <div className="rounded-lg bg-slate-200 p-3">
            <Image
              src={'/images/icons/engineering.png'}
              alt={''}
              width={100}
              height={100}
            />
          </div>
          <div className="rounded-lg bg-slate-200 p-3">
            <Image
              src={'/images/icons/childcare.png'}
              alt={''}
              width={100}
              height={100}
            />
          </div>
          <div className="rounded-lg bg-slate-200 p-3">
            <Image
              src={'/images/icons/it.png'}
              alt={''}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
