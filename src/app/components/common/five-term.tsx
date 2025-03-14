export default function FiveSTermsList() {
	const terms = [
		{ japanese: 'Seiri', vietnamese: 'Ngăn nắp' },
		{ japanese: 'Seiso', vietnamese: 'Sạch sẽ' },
		{ japanese: 'Seiton', vietnamese: 'Trật tự' },
		{ japanese: 'Shitsuke', vietnamese: 'Kỷ luật' },
		{ japanese: 'Seiketsu', vietnamese: 'Tiêu chuẩn hóa' },
	];

	return (
		<ul className='space-y-2'>
			{terms.map(({ japanese, vietnamese }, index) => (
				<li key={index} className='flex items-start'>
					<span className='text-primary mr-2'>•</span>
					<div>
						<span className='text-primary font-extrabold'>{japanese}</span>
						<span className='text-gray-700'>
							{' ('}
							{vietnamese}
							{')'}
						</span>
					</div>
				</li>
			))}
		</ul>
	);
}
