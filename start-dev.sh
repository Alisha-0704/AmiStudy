#!/bin/bash
cd backend
npm run start &
cd ..
cd frontend
npm run start &
