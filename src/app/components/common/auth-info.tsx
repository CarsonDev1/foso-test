import FOSOLogo from '@/app/components/common/foso-logo';
import PostMeta from '@/app/components/common/post-meta';

interface AuthorInfoProps {
	className?: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ className = '' }) => (
	<div
		className={`flex items-start gap-3 md:gap-0 md:items-center justify-between flex-col md:flex-row ${className}`}
	>
		<div className='flex items-center gap-3'>
			<div className='p-2 border border-[#F1F5F7] bg-white rounded-full'>
				<FOSOLogo />
			</div>
			<div className='flex flex-col'>
				<span className='text-sm font-medium text-[#667F93]'>Tác giả</span>
				<span className='text-base font-bold text-sub'>FOSO Creator</span>
			</div>
		</div>
		<PostMeta date='Cập nhật vào: 17/11/2022' readTime='10 phút đọc' />
	</div>
);

export default AuthorInfo;
