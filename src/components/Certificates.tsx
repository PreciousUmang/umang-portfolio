import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { certificates } from '../utils/certificates';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

interface Certificate {
  id: string;
  name: string;
  image: string;
  provider: string;
  verificationLink: string;
  file: string; // Add file property
}

function Certificates() {
  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const handleClickOpen = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className='my-8 px-8'>
      <div className='flex justify-between items-center'>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
        <div className='border-[1px] mt-[-2px] mr-4 w-full'></div>
        <h2 className='font-bold text-[24px]'>Certificates</h2>
        <div className='border-[1px] mt-[-2px] ml-4 w-full'></div>
        <div className='bg-green-600 rounded-full w-[20px] h-[7px]'></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
        viewport={{ once: true }}
        className='flex flex-wrap justify-center items-center mt-8 w-full'
      >
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            className='m-4'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClickOpen(certificate)}
          >
            <Card sx={{ maxWidth: 345, m: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={certificate.image}
                  alt={certificate.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {certificate.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    By: {certificate.provider}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" className='text-green-500' href={certificate.verificationLink || '#'} target='_blank' rel='noopener noreferrer'>
                  Verify Certificate
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          {selectedCertificate?.name}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <iframe src={selectedCertificate?.file} title={selectedCertificate?.name} className="w-full h-[500px]" />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
            By: {selectedCertificate?.provider}
          </Typography>
          <Button size="small" className='mt-2 text-green-500' href={selectedCertificate?.verificationLink || '#'} target='_blank' rel='noopener noreferrer'>
            Verify Certificate
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Certificates;